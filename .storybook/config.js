import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(
  withOptions({
    name: 'Storybook',
    url: '#'
  })
);

configure(loadStories, module);
