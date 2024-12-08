import { iAtom, Input, required } from '../src/atoms.tsx';
import { apDef } from '../src/utils.ts';
import { ComponentChildren } from 'preact';

interface iInputFieldCombo {
  label: string;
  error: string;
  children: ComponentChildren;
  fwd: iAtom<HTMLSelectElement>;
}

const d: iInputFieldCombo = {
  label: '',
  error: '',
  children: undefined,
  fwd: {},
};

const setup = (p: Partial<iInputFieldCombo>) => apDef(d, p);

export default function (props: Partial<iInputFieldCombo>) {
  const p = setup(props);

  return (
    <Input.Container>
      <Input.Label class='flex-col'>
        {p.label
          ? (
            <Input.Text class={p.fwd.required ? required : undefined}>
              <>{p.label}</>
            </Input.Text>
          )
          : null}
        <Input.Select {...p.fwd}>{props.children}</Input.Select>
      </Input.Label>
      {p.error ? <Input.Error>{p.error}</Input.Error> : null}
    </Input.Container>
  );
}
