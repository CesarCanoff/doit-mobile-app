import { TouchableOpacity, Text, View } from "react-native";
import { STYLE } from "./styles";

import { Ionicons } from "@expo/vector-icons";
import { THEME } from "@themes/index";

type Props = {
  isChecked: boolean;
  toggleCheckBox?: () => void;

  title: string;
  taskCategory?: string;
};

export const Checkbox = ({
  title,
  taskCategory = "",
  isChecked = false,
  toggleCheckBox,
}: Props) => {
  return (
    <>
      {isChecked ? (
        <View style={STYLE.CHECKBOX_CONTAINER}>
          <View style={STYLE.CHECKBOX_AREA}>
            {isChecked && (
              <Ionicons
                name="checkmark-sharp"
                size={24}
                color={THEME.COLORS.TITLE}
              />
            )}
          </View>

          <View
            style={{ width: "100%", flexDirection: "column", paddingRight: 10 }}
          >
            {isChecked ? (
              <Text style={STYLE.CHECKBOX_DISABLED_TITLE} numberOfLines={2}>
                {title}
              </Text>
            ) : (
              <Text style={STYLE.CHECKBOX_TITLE} numberOfLines={2}>
                {title}
              </Text>
            )}

            {taskCategory && !isChecked && (
              <View>
                <Text style={STYLE.CHECKBOX_TEXT_TASK_CATEGORY}>
                  {taskCategory}
                </Text>
              </View>
            )}
          </View>
        </View>
      ) : (
        <TouchableOpacity
          style={STYLE.CHECKBOX_CONTAINER}
          onPress={toggleCheckBox}
          activeOpacity={0.7}
        >
          <View style={STYLE.CHECKBOX_AREA}>
            {isChecked && (
              <Ionicons
                name="checkmark-sharp"
                size={24}
                color={THEME.COLORS.PRIMARY}
              />
            )}
          </View>

          <View
            style={{ width: "100%", flexDirection: "column", paddingRight: 10 }}
          >
            <Text style={STYLE.CHECKBOX_TITLE} numberOfLines={2}>
              {title}
            </Text>

            {taskCategory && (
              <View>
                <Text style={STYLE.CHECKBOX_TEXT_TASK_CATEGORY}>
                  {taskCategory}
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};
