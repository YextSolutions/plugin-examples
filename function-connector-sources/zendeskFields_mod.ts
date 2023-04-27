declare const ZENDESK_SUBDOMAIN: string;

export const fetchHelpCenterContent = async (inputString: string) => {
    const inputJson = JSON.parse(inputString);
    const pageToken = inputJson.pageToken;

    let articlesListEndpoint = `https://${ZENDESK_SUBDOMAIN}.zendesk.com/api/v2/help_center/articles/`;
    if(pageToken){
        articlesListEndpoint = pageToken;
    }

    const articlesResponse = await fetch(articlesListEndpoint).then(response => response.json());
    const articleArray = articlesResponse.articles;
    const articles: any[] = [];
    for (const article of articleArray) {
        const section = await fetchSection(article.section_id);
        const sectionInfo = section.section;
        const category = await fetchCategory(sectionInfo.category_id);
        const categoryInfo = category.category;
        const finalArticle = { ...article, sectionInfo: sectionInfo, categoryInfo: categoryInfo };
        articles.push(finalArticle);
    }
    const response: any = { data: { articles } };

    if(articlesResponse.next_page !== null){
        response['nextPageToken'] = articlesResponse.next_page;
    } 

    return JSON.stringify(response)
}

const fetchSection = async (sectionId: any) => await fetch(`https://${ZENDESK_SUBDOMAIN}.zendesk.com/api/v2/help_center/sections/${sectionId}`).then(response => response.json());
const fetchCategory = async (categoryId: any) => await fetch(`https://${ZENDESK_SUBDOMAIN}.zendesk.com/api/v2/help_center/categories/${categoryId}`).then(response => response.json());