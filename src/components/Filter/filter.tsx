import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

import { styles } from "./filter-styles";
import { FilterStatus } from "@/types/filter-status";
import { StatusIcon } from "../StatusIcon/status-icon";

export interface FilterProps extends TouchableOpacityProps {
  status: FilterStatus;
  isActive: boolean;
}

export function Filter({ status, isActive, ...rest }: FilterProps) {
  return (
    <TouchableOpacity
      style={[styles.container, { opacity: isActive ? 1 : 0.5 }]}
      {...rest}
    >
      <StatusIcon status={status} />
      <Text style={styles.title}>
        {status === FilterStatus.DONE ? "Comprados" : "Pendentes"}
      </Text>
    </TouchableOpacity>
  );
}
