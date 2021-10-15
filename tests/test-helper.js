import Application from 'dummy/app';
import config from 'dummy/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-qunit';

import Ember from 'ember';

if (Ember.VERSION === "1.13.13") {
  setResolver(resolver);
} else {
  setApplication(Application.create(config.APP));
}

setup(QUnit.assert);

start();
