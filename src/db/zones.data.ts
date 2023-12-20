export interface Zone {
  name: string;
  status: "armed" | "disarmed";
}

const zones: Zone[] = [
  {
    name: "Front Door",
    status: "armed",
  },
  {
    name: "Back Door",
    status: "disarmed",
  },
];

export default zones;
