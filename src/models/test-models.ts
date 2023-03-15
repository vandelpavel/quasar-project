// Just imports you can ignore these
import {
  QCheckboxProps,
  QInputProps,
  QSelectProps,
  QToggleProps,
} from 'quasar';

// Enum containing the names of the available components
export enum FormMakerAllowedcomponentNames {
  Toggle = 'QToggle',
  Checkbox = 'QCheckbox',
  Input = 'QInput',
  Select = 'QSelect',
}

// Not sure if there is a name to define this kind of interfaces but this is used as an helper to create new interfaces that shares the main structure
export interface BasicComponentType<
  ComponentType extends FormMakerAllowedcomponentNames,
  ComponentPropsType,
  ModelValueType
> {
  componentProps: {
    modelValueName: keyof ModelValueType;
  } & Omit<ComponentPropsType, 'modelValue'>;
  component: ComponentType;
}

// These are the intefaces that I've created and that i should support
export type QToggleFormMakerComponent<ModelValueType> = BasicComponentType<
  FormMakerAllowedcomponentNames.Toggle,
  QToggleProps,
  ModelValueType
>;
export type QCheckboxFormMakerComponent<ModelValueType> = BasicComponentType<
  FormMakerAllowedcomponentNames.Checkbox,
  QCheckboxProps,
  ModelValueType
>;
export type QInputFormMakerComponent<ModelValueType> = BasicComponentType<
  FormMakerAllowedcomponentNames.Input,
  QInputProps,
  ModelValueType
>;
export type QSelectFormMakerComponent<ModelValueType> = BasicComponentType<
  FormMakerAllowedcomponentNames.Select,
  QSelectProps,
  ModelValueType
>;

// In order to make things easier I've grouped them in a single type that handles everything
export type FormMakerAllowedcomponents<
  ModelValueType extends Record<string, unknown>
> =
  | QToggleFormMakerComponent<ModelValueType>
  | QCheckboxFormMakerComponent<ModelValueType>
  | QInputFormMakerComponent<ModelValueType>
  | QSelectFormMakerComponent<ModelValueType>;
