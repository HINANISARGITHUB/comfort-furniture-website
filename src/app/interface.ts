//  1st interface for fearured product

export interface simplifiedProduct {
    _id: string;
   titleImage: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
}

// 2nd interface product/[slug]//

export interface fullProduct {

    _id: string;
    titleImage: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    description : string;
    price_id: string;

}