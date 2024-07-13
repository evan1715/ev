// // Example pseudocode for batch processing with dynamic delays
// const BATCH_SIZE = 10; // Adjust based on performance testing
// const DELAY_PER_BATCH = 10; // ms, adjust based on performance testing

// const batchProcessor = async ()

// for (let i = 0; i < remoteDevices.length; i += BATCH_SIZE) {
//     const batch = remoteDevices.slice(i, i + BATCH_SIZE);
//     for (const remoteDevice of batch) {
//         state.sync = updateSyncStore({
//             authorized: true,
//             newSyncData: remoteDevice,
//             settingsState: state.settings,
//             state: state.sync,
//         });
//     }
//     if (i + BATCH_SIZE < remoteDevices.length) {
//         await delay(DELAY_PER_BATCH); // Only delay if there are more devices to process
//     }
// }

/**
 * Process an array in batches with a delay between each batch
 * @param {any[]} arrayToLoop
 * @param {(item: any) => void} processItem
 * @param {number} BATCH_SIZE
 * @param {number} DELAY_PER_BATCH
 * @returns {Promise<void>}
 * @example
 * const updateDeviceState = (remoteDevice: any) => {
 *    state.sync = updateSyncStore({
 *       authorized: true,
 *      newSyncData: remoteDevice,
 *     settingsState: state.settings,
 *    state: state.sync,
 * });
 * };
 * await batchProcessor(remoteDevices, updateDeviceState, 10, 10);
 */
async function batchProcessor(arrayToLoop, processItem, BATCH_SIZE = 5, DELAY_PER_BATCH = 5) {
    const arrayLength = arrayToLoop.length;

    for (let i = 0; i < arrayLength; i += BATCH_SIZE) {
        const batch = arrayToLoop.slice(i, i + BATCH_SIZE);

        for (const piece of batch) {
            processItem(piece);
        }

        if (i + BATCH_SIZE < arrayLength) {
            await new Promise((resolve) => setTimeout(resolve, DELAY_PER_BATCH));
        }
    }
}

export { batchProcessor as default };

// // Usage example
// const updateDeviceState = (remoteDevice: any) => {
//     // Assuming `state` and `updateSyncStore` are accessible in this context
//     state.sync = updateSyncStore({
//         authorized: true,
//         newSyncData: remoteDevice,
//         settingsState: state.settings,
//         state: state.sync,
//     });
// };

// // Call the function with the desired parameters
// await processInBatches(remoteDevices, updateDeviceState, 10, 10);
