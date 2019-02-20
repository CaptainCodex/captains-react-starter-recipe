import React from 'react';
import { action } from '@storybook/addon-actions';
import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { HelloWorld } from '../containers/HelloWorld';

storiesOf('HelloWorld', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <HelloWorld
      getHello={action('getHello triggered')}
      getWorld={action('getWorld triggered')}
      greeting={object('greeting', 'Hello world!')}
      salutation={object('salutation', 'Bonjour.')}
    />
  ));
