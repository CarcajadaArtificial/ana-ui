import { iFooter } from "../src/types/props.ts";
import setup from "../src/setup/Footer.ts";
import Layout from "./Layout.tsx";
import Link from "./Link.tsx";
import { LAYOUT_TYPES } from "../mod.ts";

export default function (props: Partial<iFooter>) {
  const { c, children, madeWithFresh, ...p } = setup(props);

  return (
    <footer {...p} class={c.footer}>
      <Layout type={LAYOUT_TYPES.LEFT}>
        {children}
        {madeWithFresh
          ? (
            <Link href="https://fresh.deno.dev">
              <img
                width="197"
                height="37"
                src="https://fresh.deno.dev/fresh-badge.svg"
                alt="Made with Fresh"
              />
            </Link>
          )
          : null}
      </Layout>
    </footer>
  );
}
