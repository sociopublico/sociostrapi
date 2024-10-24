module.exports = {
    async find(ctx) {
      // Load your component schema
      const componentSchema = strapi.components['multi-select.right'];
  
      // Extract the enumeration values
      const enumValues = componentSchema.attributes.options.enum;
  
      // Send the response
      ctx.send({
        enumeration: enumValues,
      });
    },
  };