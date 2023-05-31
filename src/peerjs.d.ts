import Peer from "@/peerjs";
declare module 'peerjs' {
    const Peer: any;
    export default Peer;
}