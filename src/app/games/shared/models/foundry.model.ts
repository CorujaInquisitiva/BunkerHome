export class FoundryStatus {
  active: boolean;
  version: string;
  world: string;
  system: string;
  systemVersion: string;
  users: number;
  uptime: number;
  constructor(
    active: boolean,
    version: string,
    world: string,
    system: string,
    systemVersion: string,
    users: number,
    uptime: number,
  ) {
    this.active = active;
    this.version = version;
    this.world = world;
    this.system = system;
    this.systemVersion = systemVersion;
    this.users = users;
    this.uptime = uptime;
  }
}
