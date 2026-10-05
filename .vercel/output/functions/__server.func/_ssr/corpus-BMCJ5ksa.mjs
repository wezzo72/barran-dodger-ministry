//#region node_modules/.nitro/vite/services/ssr/assets/corpus-BMCJ5ksa.js
var inventory = {
	date: "4 October 2026",
	method: "2026-10-04-git-tree-v1",
	uniqueCompletePdfs: "3,215",
	uniquePdfBlobs: "3,667",
	gospelPath: "62",
	propheticPath: "65",
	statementPath: "211",
	officialPath: "410",
	correspondencePath: "512",
	essayPath: "43",
	legalPath: "45",
	reposWithFiles: "8",
	otsFiles: "3",
	sha256Lines: "2,655",
	preservationPages: "660",
	barrandodgerFiles: "5,584",
	barrandodgerPdfs: "2,840",
	officialDrive: "95"
};
var mirror = "https://github.com/wezzo72/Barrandodger/blob/main/" + encodeURIComponent("THE MIRROR  God’s Favour, Anointing, and Purpose — The Calling of a Chosen Vessel for His Glory.txt");
var prophecy = "https://github.com/wezzo72/Barrandodger/blob/main/" + encodeURIComponent("THE PROPHECY OF THE ONE THEY TRIED TO ERASE  .txt");
var brief = "https://github.com/wezzo72/Barrandodger/blob/main/" + encodeURIComponent("Legal Brief — cumulative 35-year record.pdf");
var shelves = [
	{
		slug: "gospel",
		kicker: "Creative scripture",
		title: "Gospel shelf",
		count: `${inventory.gospelPath} gospel-path PDFs`,
		summary: "The downloadable gospel bundle on the public archive, plus the gospel-path files counted in the 4 October inventory. A path word is a shelf mark, not a ruling on the text.",
		fit: "Readers, congregations, and anyone who wants the religious writing as a creative edition.",
		seal: "The bundle sits in the public repository. Integrity, where a list exists, is a SHA-256 line or an OpenTimestamps file. Three OpenTimestamps files were found in the whole inventory, not a larger stamp count.",
		href: "https://github.com/drbarrandodger/barran-dodger-archive/blob/main/GOSPEL_DOWNLOAD.zip",
		hrefLabel: "Open GOSPEL_DOWNLOAD.zip",
		editions: [{
			title: "Gospel download",
			note: "Public zip on drbarrandodger/barran-dodger-archive. Reading it does not require a fee.",
			href: "https://github.com/drbarrandodger/barran-dodger-archive/blob/main/GOSPEL_DOWNLOAD.zip",
			cover: "/covers/gospel.jpg"
		}]
	},
	{
		slug: "prophetic",
		kicker: "Prophetic writing",
		title: "Prophetic shelf",
		count: `${inventory.propheticPath} prophetic-path PDFs`,
		summary: "Prophetic and devotional writing published under the author’s name. Offered as creative scripture and testimony, not as a verdict about any other person.",
		fit: "Personal reading, ministry contexts, and researchers of contemporary prophetic writing.",
		seal: "Named editions below are public files. A stamp records bytes. It does not certify the theology or any allegation.",
		href: "https://github.com/wezzo72/Barrandodger",
		hrefLabel: "Open the Barrandodger repository",
		editions: [{
			title: "The Mirror — God’s Favour, Anointing, and Purpose",
			note: "Public text. The calling is the author’s. It is not a finding about anyone else.",
			href: mirror,
			cover: "/covers/mirror.jpg"
		}, {
			title: "The Prophecy of the One They Tried to Erase",
			note: "Public text. Read as prophetic writing, not as a court document.",
			href: prophecy,
			cover: "/covers/prophecy.jpg"
		}]
	},
	{
		slug: "witness",
		kicker: "Testimony and essays",
		title: "Witness shelf",
		count: `${inventory.statementPath} statement-path PDFs`,
		summary: "Essays and the author’s stated record of exile, neglect, and a thirty-five-year span, as titled on the public brief. Suitable to offer to disability advocates and human-rights readers as primary source material they assess themselves.",
		fit: "Disability organisations, peer advocates, and careful legal readers.",
		seal: "Appearance on this shelf is not a finding. The author’s titles are kept. This desk does not adopt them as proved facts.",
		href: "https://wezzo72.github.io/barrandodger-rebuild/from-exile-to-witness.html",
		hrefLabel: "Read From Exile to Witness",
		editions: [
			{
				title: "From Exile to Witness",
				note: "Public reading copy, 4 October 2026.",
				href: "https://wezzo72.github.io/barrandodger-rebuild/from-exile-to-witness.html",
				cover: "/covers/exile.jpg"
			},
			{
				title: "The Inversion of Significance",
				note: "Public reading copy.",
				href: "https://wezzo72.github.io/barrandodger-rebuild/inversion-of-significance.html",
				cover: "/covers/inversion.jpg"
			},
			{
				title: "Poverty as the Method",
				note: "Public reading copy.",
				href: "https://wezzo72.github.io/barrandodger-rebuild/poverty-as-the-method.html",
				cover: "/covers/poverty.jpg"
			},
			{
				title: "Legal brief — cumulative 35-year record",
				note: "The author’s public brief. A brief is not a judgment, and this desk does not award compensation.",
				href: brief,
				cover: "/covers/brief.jpg"
			}
		]
	},
	{
		slug: "dataset",
		kicker: "Research instrument",
		title: "Dataset shelf",
		count: `${inventory.uniqueCompletePdfs} unique complete PDFs`,
		summary: "The cross-account inventory of both public profiles, drbarrandodger and wezzo72. Deduplicated by Git blob. Prepared so a university, a legal-aid practice, or a human-rights body can cite a method instead of a slogan.",
		fit: "PhD-style and professional research use, under a licence letter. Not a degree, and not an accreditation.",
		seal: "Method 2026-10-04-git-tree-v1. Identical bytes are counted once. A Git blob id is not SHA-256. A hash is not proof the words are true.",
		href: "https://github.com/wezzo72/barrandodger-rebuild/blob/main/archive-manifest.json",
		hrefLabel: "Open archive-manifest.json",
		editions: [
			{
				title: "Archive manifest",
				note: "Counts, exclusions, and the historical figures the inventory could not reproduce.",
				href: "https://github.com/wezzo72/barrandodger-rebuild/blob/main/archive-manifest.json"
			},
			{
				title: "Dataset changelog",
				note: "What each earlier number was, and what it is not.",
				href: "https://github.com/wezzo72/barrandodger-rebuild/blob/main/DATASET_CHANGELOG.md"
			},
			{
				title: "Dataset methodology",
				note: "Public explanation of the count.",
				href: "https://wezzo72.github.io/barrandodger-rebuild/dataset-methodology.html"
			},
			{
				title: "Archive index",
				note: "The long public index. Large file.",
				href: "https://github.com/wezzo72/barrandodger-rebuild/blob/main/archive-index.json"
			}
		]
	},
	{
		slug: "preservation",
		kicker: "Site preservation",
		title: "Preservation shelf",
		count: `${inventory.preservationPages} crawled pages`,
		summary: "The 660-page preservation copy of the public site, kept beside the later recount. One shelf of the corpus, not the total.",
		fit: "Anyone who needs the site as it stood, including libraries and advocates.",
		seal: "The crawl is a copy of pages. It is not a new investigation.",
		href: "https://github.com/wezzo72/barrandodger-rebuild",
		hrefLabel: "Open barrandodger-rebuild",
		editions: [{
			title: "Finding-aid rebuild",
			note: "Described by its own line: finding aid, not a court, not a verdict.",
			href: "https://wezzo72.github.io/barrandodger-rebuild/"
		}, {
			title: "Backup repository",
			note: "Preservation mirror under wezzo72/Backup.",
			href: "https://github.com/wezzo72/Backup"
		}]
	},
	{
		slug: "pdfs",
		kicker: "Document shelf",
		title: "PDF shelf",
		count: `${inventory.barrandodgerPdfs} PDFs in one repository`,
		summary: "wezzo72/Barrandodger holds the large PDF shelf, including 95 files under the official-drive path. wezzo72/pdf-archive is the gathered PDF shelf. Official-path keywords across the inventory: 410 unique complete PDFs. A keyword is not an official finding.",
		fit: "Legal organisations and researchers who will read the files themselves.",
		seal: "SHA256SUMS.txt on that repository lists 2,655 lines and 2,569 distinct hashes. Those hashes were not recomputed for this desk.",
		href: "https://github.com/wezzo72/Barrandodger",
		hrefLabel: "Open wezzo72/Barrandodger",
		editions: [{
			title: "PDF archive",
			note: "Repository described as an archive of PDFs from the GitHub profiles.",
			href: "https://github.com/wezzo72/pdf-archive"
		}, {
			title: "Public archive application",
			note: "drbarrandodger/barran-dodger-archive, including the gospel bundle.",
			href: "https://github.com/drbarrandodger/barran-dodger-archive"
		}]
	}
];
function getShelf(slug) {
	return shelves.find((shelf) => shelf.slug === slug);
}
var repositories = [
	{
		owner: "wezzo72",
		repo: "Barrandodger",
		files: "5,584",
		pdfs: "2,840",
		note: "Main document shelf. Pages are published.",
		href: "https://github.com/wezzo72/Barrandodger"
	},
	{
		owner: "wezzo72",
		repo: "barrandodger-rebuild",
		files: "2,000",
		pdfs: "661",
		note: "Finding aid and the 660-page preservation copy.",
		href: "https://github.com/wezzo72/barrandodger-rebuild"
	},
	{
		owner: "wezzo72",
		repo: "Backup",
		files: "2,230",
		pdfs: "631",
		note: "Preservation backup.",
		href: "https://github.com/wezzo72/Backup"
	},
	{
		owner: "wezzo72",
		repo: "pdf-archive",
		files: "292",
		pdfs: "281",
		note: "Gathered PDF shelf.",
		href: "https://github.com/wezzo72/pdf-archive"
	},
	{
		owner: "wezzo72",
		repo: "barran-dodger-archive",
		files: "18,419",
		pdfs: "3,674",
		note: "Fork. Counts include a dependency tree, excluded from archive totals.",
		href: "https://github.com/wezzo72/barran-dodger-archive"
	},
	{
		owner: "drbarrandodger",
		repo: "barran-dodger-archive",
		files: "16,018",
		pdfs: "1,335",
		note: "Public archive and the gospel zip. Dependency files are not documents.",
		href: "https://github.com/drbarrandodger/barran-dodger-archive"
	},
	{
		owner: "drbarrandodger",
		repo: "New-github-barran-dodger-website-",
		files: "1,433",
		pdfs: "531",
		note: "Website tree.",
		href: "https://github.com/drbarrandodger/New-github-barran-dodger-website-"
	},
	{
		owner: "drbarrandodger",
		repo: "Barrandodger",
		files: "189",
		pdfs: "48",
		note: "Fork, counted in the same inventory.",
		href: "https://github.com/drbarrandodger/Barrandodger"
	}
];
var payment = {
	payid: "0431300940",
	institution: "Commonwealth Bank",
	accountName: "Richard McLean",
	bsb: "063307",
	account: "10140384",
	description: "Archive",
	source: "Repeated from the public support page of the finding aid. Not a new account. This desk does not take a card."
};
//#endregion
export { shelves as a, repositories as i, inventory as n, payment as r, getShelf as t };
