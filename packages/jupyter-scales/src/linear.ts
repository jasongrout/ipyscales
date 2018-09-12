// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  WidgetModel, ManagerBase
} from '@jupyter-widgets/base';

import {
  scaleLinear
} from 'd3-scale';

import {
  JUPYTER_EXTENSION_VERSION
} from './version';

import {
  ContinuousScaleModel
} from './continuous';


/**
 * A widget model of a linear scale
 */
export
class LinearScaleModel extends ContinuousScaleModel {
  defaults() {
    return {...super.defaults(),
      _model_name: LinearScaleModel.model_name,
    };
  }

  /**
   * Create the wrapped d3-scale scaleLinear object
   */
  constructObject(): any {
    return scaleLinear();
  }

  static serializers = {
      ...ContinuousScaleModel.serializers,
    }

  static model_name = 'LinearScaleModel';
}
