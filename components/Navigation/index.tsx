import setup, { iNavigation } from './setup.ts';
import Layout from '../Layout/index.tsx';
import Panel from '../Panel/index.tsx';

/**
 * @todo [!] Add a property `scroll-height` that makes the menu appear after scrolling until that height.
 * @todo [!] Add an animation when the navigation appears.
 * @todo [!] Add a layout-type prop.
 */
export default function (props: Partial<iNavigation>) {
  const { c, nostyle, nostyleAll, fref, fwd, children, ...p } = setup(props);

  return (
    <div ref={fwd.wrapper?.ref} class={c.wrapper}>
      <Panel nostyleAll={nostyleAll} fref={fwd.panel?.fref} class={c.panel}>
        <nav ref={fref} class={c.nav} {...p}>
          <Layout
            nostyleAll={nostyleAll}
            fref={fwd.layout?.fref}
            type='right'
            class={c.layout}
          >
            {children}
          </Layout>
        </nav>
      </Panel>
    </div>
  );
}
