import { View, Text, TouchableOpacity } from "react-native";
import { Trash2 } from "lucide-react-native";

import { styles } from "./item-styles";
import { StatusIcon } from "../StatusIcon/status-icon";
import { FilterStatus } from "@/types/filter-status";

interface ItemData {
  status: FilterStatus;
  description: string;
}

interface ItemProps {
  data: ItemData;
  onRemove: () => void;
  onStatusChange: () => void;
}

export function Item({ data, onRemove, onStatusChange }: ItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onStatusChange}>
        <StatusIcon status={data.status} />
      </TouchableOpacity>

      <Text style={styles.description}>{data.description}</Text>

      <TouchableOpacity activeOpacity={0.8} onPress={onRemove}>
        <Trash2 size={18} color="#828282" />
      </TouchableOpacity>
    </View>
  );
}
