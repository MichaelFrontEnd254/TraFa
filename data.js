// Product Database
const products = [
    {
        id: 1,
        name: "Ceramic Vase",
        category: "decor",
        price: 245,
        description: "Handcrafted ceramic with organic silhouette",
        fullDescription: "A beautiful handcrafted ceramic vase featuring an organic, flowing silhouette. Each piece is unique, made by skilled artisans using traditional techniques. Perfect for both fresh and dried floral arrangements.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
            "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80",
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
            "https://images.unsplash.com/photo-1615485736868-81b33942bbf9?w=800&q=80"
        ],
        details: {
            material: "Glazed ceramic",
            dimensions: "12\" H x 8\" W",
            weight: "3.2 lbs",
            color: "Matte white",
            care: "Hand wash only"
        },
        featured: true
    },
    {
        id: 2,
        name: "Arc Chair",
        category: "furniture",
        price: 890,
        description: "Sculptural seating in solid oak",
        fullDescription: "The Arc Chair combines sculptural beauty with ergonomic comfort. Crafted from sustainably sourced solid oak, this piece features graceful curves that support your body naturally while making a bold design statement.",
        image: "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?w=800&q=80",
            "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80",
            "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&q=80",
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80"
        ],
        details: {
            material: "Solid oak wood",
            dimensions: "32\" H x 24\" W x 28\" D",
            weight: "28 lbs",
            color: "Natural oak",
            care: "Oil treatment recommended"
        },
        featured: true
    },
    {
        id: 3,
        name: "Halo Lamp",
        category: "lighting",
        price: 425,
        description: "Ambient lighting in brushed brass",
        fullDescription: "The Halo Lamp creates a warm, diffused glow perfect for reading or ambient lighting. Features a brushed brass finish and integrated LED technology for energy efficiency and long-lasting performance.",
        image: "https://images.unsplash.com/photo-1565183928294-7d22356163a4?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1565183928294-7d22356163a4?w=800&q=80",
            "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
            "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
            "https://images.unsplash.com/photo-1543198126-a8f0c8e9a9d6?w=800&q=80"
        ],
        details: {
            material: "Brushed brass, frosted glass",
            dimensions: "18\" H x 10\" W",
            weight: "4.5 lbs",
            bulb: "Integrated LED, 15W",
            care: "Wipe with dry cloth"
        },
        featured: true
    },
    {
        id: 4,
        name: "Axis Mirror",
        category: "decor",
        price: 320,
        description: "Geometric form in matte black steel",
        fullDescription: "A striking geometric mirror featuring clean lines and a sophisticated matte black steel frame. The Axis Mirror serves as both a functional piece and a bold decorative element.",
        image: "https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?w=800&q=80",
            "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
            "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
            "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&q=80"
        ],
        details: {
            material: "Steel frame, mirror glass",
            dimensions: "36\" H x 24\" W",
            weight: "15 lbs",
            color: "Matte black",
            care: "Glass cleaner, avoid harsh chemicals"
        },
        featured: true
    },
    {
        id: 5,
        name: "Pillar Table",
        category: "furniture",
        price: 675,
        description: "Monolithic marble accent piece",
        fullDescription: "The Pillar Table is a statement piece carved from solid marble. Its monolithic form exudes strength and permanence, while the natural veining ensures each piece is truly unique.",
        image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&q=80",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
            "https://images.unsplash.com/photo-1544106530-49a56c52c340?w=800&q=80"
        ],
        details: {
            material: "Carrara marble",
            dimensions: "20\" H x 16\" diameter",
            weight: "45 lbs",
            color: "White with gray veining",
            care: "Seal annually, avoid acidic cleaners"
        },
        featured: true
    },
    {
        id: 6,
        name: "Linen Set",
        category: "textiles",
        price: 185,
        description: "Natural textiles in neutral tones",
        fullDescription: "Our premium linen set includes two pillow cases and a throw blanket. Made from 100% European linen, these pieces become softer with each wash while maintaining their natural, relaxed character.",
        image: "https://images.unsplash.com/photo-1595526051245-4506e0005bd4?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1595526051245-4506e0005bd4?w=800&q=80",
            "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&q=80",
            "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=800&q=80",
            "https://images.unsplash.com/photo-1631889992280-f5087676de4f?w=800&q=80"
        ],
        details: {
            material: "100% European linen",
            dimensions: "Standard pillowcases, 50x60\" throw",
            weight: "2.8 lbs",
            color: "Natural beige",
            care: "Machine washable, tumble dry low"
        },
        featured: true
    },
    {
        id: 7,
        name: "Forma Vase",
        category: "decor",
        price: 195,
        description: "Architectural ceramic vessel",
        fullDescription: "The Forma Vase showcases clean architectural lines with a contemporary matte finish. Its geometric precision creates visual interest while complementing any interior style.",
        image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
            "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
            "https://images.unsplash.com/photo-1615485736868-81b33942bbf9?w=800&q=80"
        ],
        details: {
            material: "Matte ceramic",
            dimensions: "10\" H x 6\" W",
            weight: "2.5 lbs",
            color: "Charcoal gray",
            care: "Wipe clean with damp cloth"
        },
        featured: false
    },
    {
        id: 8,
        name: "Linear Pendant",
        category: "lighting",
        price: 560,
        description: "Minimalist suspended lighting",
        fullDescription: "A minimalist pendant light featuring a sleek linear design. Perfect for dining tables or kitchen islands, creating focused task lighting with contemporary elegance.",
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
            "https://images.unsplash.com/photo-1565183928294-7d22356163a4?w=800&q=80",
            "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
            "https://images.unsplash.com/photo-1543198126-a8f0c8e9a9d6?w=800&q=80"
        ],
        details: {
            material: "Aluminum, LED strip",
            dimensions: "48\" L x 3\" W",
            weight: "6 lbs",
            bulb: "Integrated LED, 24W",
            care: "Dust regularly"
        },
        featured: false
    },
    {
        id: 9,
        name: "Canvas Lounge Chair",
        category: "furniture",
        price: 1150,
        description: "Contemporary comfort in natural materials",
        fullDescription: "This lounge chair combines a solid oak frame with premium canvas upholstery for ultimate comfort. The design balances modern aesthetics with timeless appeal.",
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80",
            "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?w=800&q=80",
            "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&q=80",
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80"
        ],
        details: {
            material: "Oak frame, canvas fabric",
            dimensions: "30\" H x 28\" W x 32\" D",
            weight: "32 lbs",
            color: "Natural oak, beige canvas",
            care: "Spot clean canvas, oil wood annually"
        },
        featured: false
    },
    {
        id: 10,
        name: "Wool Throw",
        category: "textiles",
        price: 215,
        description: "Handwoven merino wool blanket",
        fullDescription: "A luxurious handwoven throw made from 100% merino wool. Incredibly soft and warm, perfect for draping over furniture or wrapping yourself in comfort.",
        image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&q=80",
            "https://images.unsplash.com/photo-1595526051245-4506e0005bd4?w=800&q=80",
            "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=800&q=80",
            "https://images.unsplash.com/photo-1631889992280-f5087676de4f?w=800&q=80"
        ],
        details: {
            material: "100% merino wool",
            dimensions: "60\" x 80\"",
            weight: "3.5 lbs",
            color: "Heather gray",
            care: "Dry clean recommended"
        },
        featured: false
    },
    {
        id: 11,
        name: "Sphere Floor Lamp",
        category: "lighting",
        price: 680,
        description: "Sculptural ambient lighting",
        fullDescription: "A dramatic floor lamp featuring a large spherical shade that creates beautiful ambient lighting. The tripod base provides stability while maintaining visual lightness.",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
            "https://images.unsplash.com/photo-1565183928294-7d22356163a4?w=800&q=80",
            "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
            "https://images.unsplash.com/photo-1543198126-a8f0c8e9a9d6?w=800&q=80"
        ],
        details: {
            material: "Steel base, rice paper shade",
            dimensions: "65\" H x 20\" diameter",
            weight: "12 lbs",
            bulb: "E26 base, 60W max",
            care: "Dust shade gently"
        },
        featured: false
    },
    {
        id: 12,
        name: "Walnut Console",
        category: "furniture",
        price: 1450,
        description: "Slim profile solid walnut table",
        fullDescription: "A beautifully crafted console table in solid American walnut. Its slim profile makes it perfect for entryways or behind sofas, while the wood grain creates natural visual interest.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
            "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&q=80",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
            "https://images.unsplash.com/photo-1544106530-49a56c52c340?w=800&q=80"
        ],
        details: {
            material: "Solid American walnut",
            dimensions: "30\" H x 48\" W x 14\" D",
            weight: "55 lbs",
            color: "Natural walnut",
            care: "Oil treatment recommended"
        },
        featured: false
    }
];

// Get all products
function getAllProducts() {
    return products;
}

// Get featured products
function getFeaturedProducts() {
    return products.filter(p => p.featured);
}

// Get product by ID
function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

// Get products by category
function getProductsByCategory(category) {
    if (!category || category === 'all') return products;
    return products.filter(p => p.category === category);
}

// Filter products by price range
function filterByPrice(productList, min, max) {
    return productList.filter(p => p.price >= min && p.price <= max);
}

// Search products
function searchProducts(query) {
    const lowerQuery = query.toLowerCase();
    return products.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery)
    );
}
