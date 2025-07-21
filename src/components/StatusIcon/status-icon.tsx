import { View } from "react-native";
import { CircleDashed, CircleCheck } from "lucide-react-native";
import { FilterStatus } from "@/types/filter-status";

export function StatusIcon({ status }: { status: FilterStatus }) {
  const backgroundColor = status === "done" ? "green" : "red";

  return status === FilterStatus.DONE ? (
    <CircleCheck size={18} color="#2C46B1" />
  ) : (
    <CircleDashed size={18} color="#000" />
  );
}
