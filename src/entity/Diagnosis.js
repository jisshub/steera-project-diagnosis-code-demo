var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Diagnosis",
  tableName: "diagnosis",
  columns: {
    id: {
      primary: true,
      type: "bigint",
      generated: true,
    },
    code: {
      type: "varchar",
      nullable: false,
    },
    name: {
      type: "varchar",
      nullable: false,
    },
    description: {
      type: "varchar",
      nullable: false,
    },
    details: {
      type: "varchar",
      nullable: true,
    },
    created_by: {
      type: "varchar",
      nullable: false,
    },
    updated_by: {
      type: "varchar",
      nullable: true,
    },
    createdAt: {
      type: "timestamp with time zone",
      nullable: false,
    },
    updatedAt: {
      type: "timestamp with time zone",
      nullable: true,
    },
  },
});
