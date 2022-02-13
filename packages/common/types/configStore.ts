import ElectronStore from 'electron-store';

export type WebDAVHost = {
  id: string;
  alias?: string;
  directoryPath?: string;
  port?: number;
  url: string;
  options?: any;
};

export type PS4Host = {
  id: string;
  alias?: string;
  url: string;
};

export type ConfigStore = {
  webDavHosts: WebDAVHost[];
  fileServerHosts: WebDAVHost[];
  curSelectWebDavHostId?: string;
  curFileServerHostId?: string;
  ps4Hosts: PS4Host[];
  curSelectPs4HostId?: string;
};

export type ElectronConfigStore = ElectronStore<ConfigStore>;
