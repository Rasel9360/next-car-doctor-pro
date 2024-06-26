import { connectDB } from "@/lib/connectDB"
import { services } from "@/lib/services"

export const GET = async () => {
    const db = await connectDB();
    const servicesCollection = db.collection("services");
    try {
        await servicesCollection.deleteMany();
    const result = servicesCollection.insertMany(services);
    return Response.json({message: "services added"})
    } catch (error) {
        console.log(error);
    }
}