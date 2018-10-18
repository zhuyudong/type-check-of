export default function transform(m) {
  let name = m.slice(2);
  name = name[0].toLowerCase() + name.slice(1);
  return name;
}