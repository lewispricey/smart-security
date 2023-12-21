type Endpoint = {
  path: string;
  methods: Method[];
  middleware?: string[];
};

type Method = {
  type: "GET" | "POST" | "PATCH" | "DELETE";
  description: string;
  body?: Object;
  exampleResponse?: Object;
  exampleBody?: string;
};

const endpoints: Endpoint[] = [
  {
    path: "/health-check",
    methods: [
      {
        type: "GET",
        description: "Check the health of the API",
        exampleResponse: {
          msg: "OK",
        },
      },
    ],
  },
  {
    path: "/zone",
    methods: [
      {
        type: "POST",
        description: "Create a new zone",
        body: {
          name: "New-Zone",
        },
        exampleResponse: {
          name: "New-Zone",
          status: "disarmed",
        },
      },
    ],
  },
  {
    path: "/zone/:zoneName",
    methods: [
      {
        type: "PATCH",
        description: "Update a zones status",
        body: {
          status: "armed",
        },
        exampleResponse: {
          name: "New-Zone",
          status: "armed",
        },
      },
      {
        type: "DELETE",
        description: "Delete a zone",
      },
    ],
  },
  {
    path: "/user",
    methods: [
      {
        type: "POST",
        description: "Create a new user",
        body: {
          name: "New-User",
          accessCode: "1234",
        },
        exampleResponse: {
          name: "New-User",
          accessCode: "1234",
        },
      },
    ],
  },
  {
    path: "/user/:userName",
    methods: [
      {
        type: "PATCH",
        description: "Update a users access code",
        body: { accessCode: "4321" },
        exampleResponse: {
          name: "New-User",
          accessCode: "4321",
        },
      },
      {
        type: "DELETE",
        description: "Delete a user",
      },
    ],
  },
];

export default endpoints;
