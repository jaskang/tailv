import less from 'less';

export const lessPlugin = {
  transforms: [
    {
      as: 'css',
      test(id) {
        return id.endsWith('.less');
      },
      async transform(code) {
        const output = await less.render(code);
        return output.css.toString();
      }
    }
  ]
};
