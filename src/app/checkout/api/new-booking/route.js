import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
    const booking = await request.json();
    const db = await connectDB();
    const bookingCollection = db.collection("booking")
    try {
        const newBooking = await bookingCollection.insertOne(booking);
        return Response.json({ message: "service booked successful" })
    } catch (error) {
        console.log(error);
    }
}