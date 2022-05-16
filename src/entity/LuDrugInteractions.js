const EntitySchema = require('typeorm').EntitySchema;

module.exports = new EntitySchema({
  name: "LuDrugInteractions", 
  tableName: "lu_drug_interactions",
  columns: {
      id: {
          primary: true,
          type: "bigint",
          generated: true
      },
      lu_drug_interaction_id: {
          type: 'bigint',
          nullable: false
      },
      interaction_status: {
          type: 'numeric',
          nullable: false
      },
      lu_comedication_drug_collection_id: {
          type: 'bigint',
          nullable : false
      },
      lu_primary_drug_collection_id: {
          type: 'bigint',
          nullable : false
      },
      created_by: {
          type: 'bigint',
          nullable : false
      },
      createdAt: {
        type: "timestamp with time zone",
        nullable: false,
      },
      updated_by: {
        type: 'bigint',
      },
      updatedAt: {
        type: "timestamp with time zone",
        nullable: true
    } 
    }
});