import { create } from "zustand";
import { VehicleControls } from "./types";
import { Gear } from "@/src/types/domain/telemetry/constants";
import { useTelemetryStore } from "./useTelemetryStore";

export const useVehicleControlStore = create<VehicleControls>((set) => ({
  climate: {
    temperature: 70,
    fanSpeed: 2,
    mode: "auto",
  },
  locks: {
    locked: true,
  },
  lights: {
    headlights: false,
    interior: false,
  },
  gear: "P",

  setClimate: (partial) =>
    set((state) => ({
      climate: { ...state.climate, ...partial },
    })),

  setLocks: (partial) =>
    set((state) => ({
      locks: { ...state.locks, ...partial },
    })),


  setLights: (partial) =>
    set((state) => ({
      lights: { ...state.lights, ...partial },
    })),

  setGear: (gear: Gear) => {
    set(() => ({ gear }))
    useTelemetryStore.getState().setTelemetry({ gear })
  }
}))
