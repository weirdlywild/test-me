import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { H5PController } from "../h5P.controller";
import { H5PService } from "../h5P.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  accessibility: "exampleAccessibility",
  createdAt: new Date(),
  description: "exampleDescription",
  discipline: "exampleDiscipline",
  id: "exampleId",
  language: "exampleLanguage",
  learningOutcomes: "exampleLearningOutcomes",
  owner: "exampleOwner",
  title: "exampleTitle",
  topic: "exampleTopic",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  accessibility: "exampleAccessibility",
  createdAt: new Date(),
  description: "exampleDescription",
  discipline: "exampleDiscipline",
  id: "exampleId",
  language: "exampleLanguage",
  learningOutcomes: "exampleLearningOutcomes",
  owner: "exampleOwner",
  title: "exampleTitle",
  topic: "exampleTopic",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    accessibility: "exampleAccessibility",
    createdAt: new Date(),
    description: "exampleDescription",
    discipline: "exampleDiscipline",
    id: "exampleId",
    language: "exampleLanguage",
    learningOutcomes: "exampleLearningOutcomes",
    owner: "exampleOwner",
    title: "exampleTitle",
    topic: "exampleTopic",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  accessibility: "exampleAccessibility",
  createdAt: new Date(),
  description: "exampleDescription",
  discipline: "exampleDiscipline",
  id: "exampleId",
  language: "exampleLanguage",
  learningOutcomes: "exampleLearningOutcomes",
  owner: "exampleOwner",
  title: "exampleTitle",
  topic: "exampleTopic",
  updatedAt: new Date(),
};

const service = {
  createH5P() {
    return CREATE_RESULT;
  },
  h5PS: () => FIND_MANY_RESULT,
  h5P: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("H5P", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: H5PService,
          useValue: service,
        },
      ],
      controllers: [H5PController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /h5Ps", async () => {
    await request(app.getHttpServer())
      .post("/h5Ps")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /h5Ps", async () => {
    await request(app.getHttpServer())
      .get("/h5Ps")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /h5Ps/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/h5Ps"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /h5Ps/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/h5Ps"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /h5Ps existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/h5Ps")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/h5Ps")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
