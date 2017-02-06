export class BitView {
        /**
        *  BitView provides a similar interface to the standard
        *  DataView, but with support for bit-level reads / writes.
        *  Default constructor, takes in a single argument of an ArrayBuffer.
        *  Optional are the byteOffset and byteLength arguments to offset and truncate the view's representation of the buffer.
        */

        constructor(buffer: ArrayBuffer, byteOffset?: number, byteLength?: number);

        byteLength: number;
        buffer: ArrayBuffer;

        getBits(offset: number, bits: number, signed: boolean): number;
        getInt8(offset: number): number;
        getUInt8(offset: number): number;
        getInt16(offset: number): number;
        getUInt16(offset: number): number;
        getInt32(offset: number): number;
        getUInt32(offset: number): number;
        getFloat32(offset: number): number;
        getFloat64(offset: number): number;
        getBoolean(offset: number): number;

        setBits(offset: number, value: number, bits: number): void;
        setInt8(offset: number, value: number): void;
        setUInt8(offset: number, value: number): void;
        setInt16(offset: number, value: number): void;
        setUInt16(offset: number, value: number): void;
        setInt32(offset: number, value: number): void;
        setUInt32(offset: number, value: number): void;
        setFloat32(offset: number, value: number): void;
        setFloat64(offset: number, value: number): void;
        setBoolean(offset: number, value: boolean): void;

    }



   export class BitStream {
        /**
        *  Default constructor, takes in a single argument of an ArrayBuffer.
        *  Optional are the byteOffset and byteLength arguments to offset and truncate the view's representation of the buffer.
        */

        constructor(buffer: ArrayBuffer, byteOffset?: number, byteLength?: number);
        constructor(view: BitView);

        byteIndex: number;
        view: BitView;

        readBits(bits: number, signed: boolean): number;
        readBits(value: number, bits: number): number;

        /**
         * Reads bytes from the underlying view at the current index until either bytes count is reached or a 0x00 terminator is reached.
         */
        readASCIIString(bytes?: number): string;

        /**
         *Writes a string followed by a NULL character to the underlying view starting at the current index.
         *If the string is longer than bytes it will be truncated, and if it is shorter 0x00 will be written in its place.
         */
        writeASCIIString(string: string, bytes?: number): void
    }

