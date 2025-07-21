import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import { Button } from "@/components/Button/button";
import { Input } from "@/components/Input/Input";
import { Filter } from "@/components/Filter/filter";
import { Item } from "@/components/Item/item";

import { FilterStatus } from "@/types/filter-status";
import { styles } from "./home-styles";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING];
const ITEMS = [
  {
    id: "1",
    description: "Comprar leite",
    status: FilterStatus.PENDING,
  },
  {
    id: "2",
    description: "Comprar pão",
    status: FilterStatus.DONE,
  },
  {
    id: "3",
    description: "Comprar ovos",
    status: FilterStatus.PENDING,
  },
];

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Adicionar" />
      </View>

      <View style={styles.content}>
        <View style={styles.filter}>
          {FILTER_STATUS.map((status) => (
            <Filter
              key={status}
              status={status}
              isActive={status === FilterStatus.DONE}
            />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onRemove={() => console.log(`Remove item ${item.id}`)}
              onStatusChange={() =>
                console.log(`Change status of item ${item.id}`)
              }
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>Nenhum item encontrado.</Text>
          )}
        />
      </View>
    </View>
  );
}
