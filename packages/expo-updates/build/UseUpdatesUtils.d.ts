import type { Manifest, UpdatesNativeStateMachineContext, UpdatesNativeStateRollback } from './Updates.types';
import { type CurrentlyRunningInfo, type UpdateInfo } from './UseUpdates.types';
export declare const currentlyRunning: CurrentlyRunningInfo;
export type UseUpdatesStateType = {
    isStartupProcedureRunning: boolean;
    availableUpdate?: UpdateInfo;
    downloadedUpdate?: UpdateInfo;
    checkError?: Error;
    downloadError?: Error;
    isUpdateAvailable: boolean;
    isUpdatePending: boolean;
    isChecking: boolean;
    isDownloading: boolean;
    isRestarting: boolean;
    restartCount: number;
    lastCheckForUpdateTimeSinceRestart?: Date;
};
export declare const updateFromManifest: (manifest: NonNullable<Manifest>) => UpdateInfo;
export declare const updateFromRollback: (rollback: UpdatesNativeStateRollback) => UpdateInfo;
export declare const updatesStateFromContext: (context: UpdatesNativeStateMachineContext) => UseUpdatesStateType;
//# sourceMappingURL=UseUpdatesUtils.d.ts.map