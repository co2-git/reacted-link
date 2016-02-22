'use strict';

import describe           from 'redtea';
import should             from 'should';
import React              from 'react';
import css                from 'css';
import { DOMParser }      from 'xmldom';
import ReactDOMServer     from 'react-dom/server';
import Link               from './components/link';

function test(props = {}) {
  const locals = {};

  function getDOMNode (props) {
    const rendered = ReactDOMServer.renderToString(
      React.createFactory(Link)(props)
    );

    return new DOMParser().parseFromString(rendered, 'text/html');
  }

  return describe('reacted-link', it => {
    it('should be a class', () => Link.should.be.a.Function());

    it('<Link href="/foo" />', it => {
      it('should be a <a>', () => {
        locals.domNode = getDOMNode({ href : '/foo' }).documentElement;

        locals.domNode.tagName.should.be.exactly('a');
      });

      it('should have href', it => {
        let href;

        for ( let i in locals.domNode.attributes ) {
          if ( locals.domNode.attributes[i].name === 'href' ) {
            href = locals.domNode.attributes[i].value;
          }
        }

        it('should be href', () =>
          should(href).be.a.String()
        );

        it('should be the correct URI', () =>
          href.should.be.exactly('/foo')
        );
      });
    });

    it('<Link to="/foo" />', it => {
      it('should be a <a>', () => {
        locals.domNode = getDOMNode({ to : '/foo' }).documentElement;

        locals.domNode.tagName.should.be.exactly('a');
      });

      it('should have href', it => {
        let href;

        for ( let i in locals.domNode.attributes ) {
          if ( locals.domNode.attributes[i].name === 'href' ) {
            href = locals.domNode.attributes[i].value;
          }
        }

        it('should be href', () =>
          should(href).be.a.String()
        );

        it('should be the correct URI', () =>
          href.should.be.exactly('/foo')
        );
      });
    });

  });
}

export default test;
