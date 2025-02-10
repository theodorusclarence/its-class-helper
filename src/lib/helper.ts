export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
};
// !STARTERCONF This OG is generated from https://github.com/theodorusclarence/og
// Please clone them and self-host if your site is going to be visited by many people.
// Then change the url and the default logo.
export function openGraph({
  siteName,
  templateTitle,
  description,
  // !STARTERCONF Or, you can use my server with your own logo.
  logo = 'https://www.its.ac.id/wp-content/uploads/2020/07/Lambang-ITS-2-300x300.png',
}: OpenGraphType): string {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(siteName.trim());
  const ogTemplateTitle = templateTitle ? encodeURIComponent(templateTitle.trim()) : undefined;
  const ogDesc = encodeURIComponent(description.trim());

  return `https://og.clarence.link/api/general?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ''
  }`;
}

/**
 *
 * @returns 1 if the current month is between August and January, 2 if the current month is between February and July
 */
export const getSemester = (): number => {
  const month = new Date().getMonth() + 1;
  if (month >= 2 && month <= 7) return 2;
  return 1;
};

/**
 *
 * @returns {number} current MK year based on the current date and semester
 */
export const getMKYear = (): number => {
  const currentYear = new Date().getFullYear();
  const currentSemester = getSemester();

  return currentSemester === 2 ? currentYear - 1 : currentYear;
};
