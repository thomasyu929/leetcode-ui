function strRender(template, data) {
  const reg = /\{\{(\w+)\}\}/;

  if (reg.test(template)) {
    const name = reg.exec(template);
    template = template.replace(reg, data[name]);

    return strRender(template, data);
  }

  return template;
}