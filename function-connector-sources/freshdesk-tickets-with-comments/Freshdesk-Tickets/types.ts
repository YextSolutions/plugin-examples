export type State = {
    retryAfter?: number;
    ticketUrl?: string;
    ticketIndex: number;
    // ticket: {
    //     currentPage: any[];
    //     index: number;
    //     nextPageUrl?: string;
    // };
    // comment: {
    //     accumulated: any[];
    //     nextCommentPageUrl?: string; 
    // }
    // finalTickets: any[];
}

export type CommentResponse = {
    comments?: any[];
    retryAfter?: number;
}