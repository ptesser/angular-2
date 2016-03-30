import {
  it,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {WebpackState} from 'angular2-hmr';

// Load the implementations that should be tested
import {HeaderMenu} from './header-menu';

describe('HeaderMenu', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    WebpackState,
    HeaderMenu
  ]);

  it('should have a url', inject([ HeaderMenu ], (header) => {
    // expect(app.url).toEqual('https://twitter.com/AngularClass');
  }));

});
