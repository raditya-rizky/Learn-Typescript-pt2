type Info = [number, string];

const rad: Info = [12, "dew"];
const riz: [number, string] = [21, "dp"];

// this will not be error, except we push data types other than number nd string
rad.push("ofc");
riz.push("okay");

console.log(rad);
console.log(riz);

let num: number = 50_000;
console.log(num);

const id: { no: number; type: string } = {
  no: 12,
  type: "wat",
};

let employee: {
  // readonly artinya kita tidak bisa reassign dengan value baru
  readonly id: number;
  name: string;
  // jika diisi "?" maka artinya optional, boleh diisi atau tidak
  address?: string;
} = {
  id: 22,
  name: "raditya",
};
// code dibawah akan error karena id merupakan reaonly
// employee.id = 23

type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

// "&" disebut intersection
type UIWidget = Draggable & Resizeable;

// jika pakai UIWidget sebagai data type maka inisiasi semua property yang ada di type Draggable dan Resizeable
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
