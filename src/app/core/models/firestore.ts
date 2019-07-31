export interface User {
  nom: string;
  prenom: string;
}

export interface Group {
  admin: string;
  groupId: number;
  preferences: {
    communicationApp: string;
    saveApp: string;
    versionControlApp: string;
  };
  users: string[];
}

export interface Course {
  id?: string;
  title: string;
  teacher: string;
  tps: string[];
}

export interface Tps {
  tpId: string;
  modelId: string;
  title: string;
  returnTime: Date;
  description: string;
  versionControlApp: string;
  groupSize: { min: number; max: number };
}

export interface Model {
  returnTime: Date;
  versionControlApp: string;
  groupSize: { min: number; max: number };
}
