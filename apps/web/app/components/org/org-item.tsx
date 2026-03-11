type Props = {
  id: string;
  name: string;
};

export function OrgItem({ id, name }: Props) {
  return <option value={id}>{name}</option>;
}
