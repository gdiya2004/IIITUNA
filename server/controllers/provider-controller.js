import Provider from "../model/Providermodel.js";
// Register Provider
export const registerProvider = async (req, res) => {
    
    try {
         console.log(req.body);  
        const { name, email, phone, service, contact, location, price, password } = req.body;

        const existingProvider = await Provider.findOne({ email });
        if (existingProvider) {
            return res.status(400).json({ message: "Provider already exists" });
        }

        const newProvider = await Provider.create({ name, email, phone, service, contact, location, price, password });
        

        return res.status(201).json({
            message: "Provider registered successfully",
            token:  await newProvider.generateToken(),
            providerId: newProvider._id.toString(),
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

// Login Provider
export const loginProvider = async (req, res) => {
    try {
        const { email, password } = req.body;
        const provider = await Provider.findOne({ email });

        if (!provider || !(await provider.comparePassword(password))) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        return res.status(200).json({
            message: "Login Successful",
            token: provider.generateToken(),
            providerId: provider._id.toString(),
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

// Get Provider Profile (Protected Route)
export const getProviderProfile = async (req, res) => {
    try {
        const provider = await Provider.findById(req.provider.providerId).select("-password");

        if (!provider) {
            return res.status(404).json({ message: "Provider not found" });
        }

        return res.status(200).json(provider);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
