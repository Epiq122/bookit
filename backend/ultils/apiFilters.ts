class APIFilters {
    query: any;
    queryString: any;

    constructor(query: any, queryString: any) {
        this.query = query;
        this.queryString = queryString;
    }

    search(): APIFilters {
        const location = this.queryString?.location ? {
            address: {
                $regex: this.queryString.location,
                $options: 'i',

            }
        } : {}
        this.query = this.query.find({...location})
        return this
    }
}

export default APIFilters;
