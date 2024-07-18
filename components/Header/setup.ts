//   _  _             _           ___      _
//  | || |___ __ _ __| |___ _ _  / __| ___| |_ _  _ _ __
//  | __ / -_) _` / _` / -_) '_| \__ \/ -_)  _| || | '_ \
//  |_||_\___\__,_\__,_\___|_|   |___/\___|\__|\_,_| .__/
//                                                 |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Header />` component.
 *
 * @module
 */
import { apDef, o, part } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { LayoutTypes } from '../../src/enums.ts';
import { iLayout } from '../Layout/setup.ts';
import { iPanel } from '../Panel/setup.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Header />` component. */
export type iHeader = Omit<iComponent, 'layout'> & {
  layout: LayoutTypes;
  banner: boolean;
  fwd: Partial<{
    layout: Partial<iLayout>;
    panel: Partial<iPanel>;
    wrapper: iFwd<HTMLDivElement>;
  }>;
};

/** These are the default values of the `<Header />` component's props. */
const defaults: iHeader = {
  layout: 'default',
  banner: false,
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Header />` component. */
export default (props: Partial<iHeader>) => {
  const p = apDef<iHeader>(defaults, props);

  const classes = part({
    panel: o(
      [styles, p.banner ? 'header__panel--banner' : ''],
      { ...p.fwd.panel },
    ),
    header: o('header', { ...p }),
    layout: o('', { ...p.fwd.layout }),
    wrapper: o('', { ...p.fwd.wrapper }),
  });

  delete p.class;
  return { c: classes, ...p };
};
