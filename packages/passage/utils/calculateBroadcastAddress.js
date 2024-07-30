/**
 * Calculate the broadcast address for a given IP and subnet.
 * @param {string} ip - The IP address.
 * @param {string} subnet - The subnet mask.
 */
const calculateBroadcastAddress = (ip, subnet) => {
    const partsIP = ip.split('.').map(Number);
    const partsSubnet = subnet.split('.').map(Number);
    const partsBroadcast = partsIP.map((part, index) => {
        const mask = partsSubnet[index];

        if (!mask) {
            return 255;
        }
        return part | (~mask & 255);
    });

    return partsBroadcast.join('.');
};

module.exports = calculateBroadcastAddress;
