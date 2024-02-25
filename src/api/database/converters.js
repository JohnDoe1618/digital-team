export class Developers {
    constructor (name, email, counts ) {
        this.name = name;
        this.email = email;
        this.counts = counts;
    }
    toString() {
        return this.name + ', ' + this.email + ', ' + this.counts;
    }
}

// Firestore data converter
export const developerConverter = {
    toFirestore: (developer) => {
        return {
                name: developer.name,
                email: developer.email,
                counts: developer.counts
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Developers(data.name, data.email, data.counts);
    }
};