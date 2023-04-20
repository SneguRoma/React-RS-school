import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { StaticRouter } from 'react-router-dom/server';

export function render(
  url: string | Partial<Location>,
  options: RenderToPipeableStreamOptions | undefined
) {
  return renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );
}
