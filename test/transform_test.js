import assert from 'assert';
import transform from '../src/transform.js';

describe("transform.js", () => {

  describe("setContentsUsingXslt", () => {

    var xslt = `
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" indent="no" omit-xml-declaration="yes" />
    <xsl:template match="/test">Hello, World!</xsl:template>
</xsl:stylesheet>`;

    it("Transforms transforms XML and adds it to the container", () => {

      var container = document.createElement('div');
      transform.setContentsUsingXslt(container, '<test></test>', xslt);
      assert.equal("Hello, World!", container.innerHTML);

    });

    it('Replaces the existing contents', () => {

      var container = document.createElement('div');
      container.innerHTML = 'Testing';
      transform.setContentsUsingXslt(container, '<test></test>', xslt);
      assert.equal("Hello, World!", container.innerHTML);

    });

  });

});