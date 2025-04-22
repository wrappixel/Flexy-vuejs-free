import {
    AlertCircleIcon,
    ApertureIcon,
    AppsIcon,
    AppWindowIcon,
    BasketIcon,
    BorderAllIcon,
    BorderHorizontalIcon,
    BorderInnerIcon,
    BorderStyle2Icon,
    BorderTopIcon,
    BorderVerticalIcon,
    BoxAlignBottomIcon,
    BoxAlignLeftIcon,
    BoxIcon,
    BoxModelIcon,
    BrandTidalIcon,
    CalendarIcon,
    ChartArcsIcon,
    ChartAreaIcon,
    ChartCandleIcon,
    ChartDonut3Icon,
    ChartDotsIcon,
    ChartLineIcon,
    ChartRadarIcon,
    ColumnsIcon,
    CopyIcon,
    CurrencyDollarIcon,
    EditIcon,
    EyeTableIcon,
    FileCheckIcon,
    FileDotsIcon,
    FilesIcon,
    FileTextIcon,
    FilterIcon,
    HelpIcon,
    JumpRopeIcon,
    LayoutDashboardIcon,
    LayoutKanbanIcon,
    LoginIcon,
    MailIcon,
    Message2Icon,
    MoodHappyIcon,
    PageBreakIcon,
    PhotoAiIcon,
    PointIcon,
    RotateIcon,
    RowInsertBottomIcon,
    SearchIcon,
    ServerIcon,
    SettingsIcon,
    ShoppingCartIcon,
    SocialIcon,
    SortAscendingIcon,
    TicketIcon,
    TypographyIcon,
    UserCircleIcon,
    UserPlusIcon,
    UserShieldIcon,
    ZoomCodeIcon
} from 'vue-tabler-icons';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    chipColor?: string;
    chipBgColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
    external?: boolean;
}

const sidebarItem: menu[] = [
    { header: 'Home' },
    {
        title: 'Dashboard',
        icon: LayoutDashboardIcon,
        to: '/',
        external: false
    },
    {
        title: 'Analytical',
        icon: ApertureIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/dashboards/analytical',
        chip: 'Pro',
        external: true
    },
    {
        title: 'eCommerce',
        icon: ShoppingCartIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/dashboards/ecommerce',
        external: true
    },
    {
        title: 'Front Pages',
        icon: AppWindowIcon,
        chip: 'Pro',
        to: '/',
        children: [
            {
                title: 'Homepage',
                chip: 'Pro',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/front-page/homepage',
                external: true
            },
            {
                title: 'About Us',
                chip: 'Pro',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/front-page/about-us',
                external: true
            },
            {
                title: 'Blog',
                chip: 'Pro',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/front-page/blog/posts',
                external: true
            },
            {
                title: 'Blog Details',
                chip: 'Pro',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/front-page/blog/early-black-friday-amazon-deals-cheap-tvs-headphones',
                external: true
            },
            {
                title: 'Contact Us',
                chip: 'Pro',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/front-page/contact-us',
                external: true
            },
            {
                title: 'Portfolio',
                chip: 'Pro',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/front-page/portfolio',
                external: true
            },
            {
                title: 'Pricing',
                chip: 'Pro',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/front-page/pricing',
                external: true
            }
        ]
    },

    { header: 'utilities' },
    {
        title: 'Typography',
        icon: TypographyIcon,
        to: '/ui/typography',
        external: false
    },
    {
        title: 'Shadow',
        icon: CopyIcon,
        to: '/ui/shadow',
        external: false
    },

    { header: 'Apps' },
    {
        title: 'Contact',
        icon: BoxIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/apps/contacts',
        chip: 'Pro',
        external: true
    },

    {
        title: 'Blog',
        icon: ChartDonut3Icon,
        chip: 'Pro',
        to: '/',
        children: [
            {
                title: 'Posts',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/apps/blog/posts',
                external: true
            },
            {
                title: 'Detail',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones',
                external: true
            }
        ]
    },
    {
        title: 'E-Commerce',
        icon: BasketIcon,
        to: '/ecommerce/',
        chip: 'Pro',
        children: [
            {
                title: 'Shop',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/ecommerce/products',
                external: true
            },
            {
                title: 'Detail',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/ecommerce/product/detail/1',
                external: true
            },
            {
                title: 'List',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/ecommerce/productlist',
                external: true
            },
            {
                title: 'Checkout',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/ecommerce/checkout',
                external: true
            },
            {
                title: 'Add Product',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/ecommerce/add-product',
                external: true
            },
            {
                title: 'Edit Product',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/ecommerce/edit-product',
                external: true
            }
        ]
    },
    {
        title: 'User Profile',
        icon: UserCircleIcon,
        chip: 'Pro',
        to: '/',
        children: [
            {
                title: 'Profile',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/apps/user/profile',
                external: true
            },
            {
                title: 'Followers',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/apps/user/profile/followers',
                external: true
            },
            {
                title: 'Friends',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/apps/user/profile/friends',
                external: true
            },
            {
                title: 'Gallery',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/apps/user/profile/gallery',
                external: true
            }
        ]
    },
    {
        title: 'Invoice',
        icon: FileCheckIcon,
        chip: 'Pro',
        to: '/',
        children: [
            {
                title: 'List',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/apps/invoice',
                external: true
            },
            {
                title: 'Details',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/apps/invoice/details/102',
                external: true
            },
            {
                title: 'Create',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/apps/invoice/create',
                external: true
            },
            {
                title: 'Edit',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/apps/invoice/edit/102',
                external: true
            }
        ]
    },
    {
        title: 'Chats',
        icon: Message2Icon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/apps/chats',
        external: true
    },

    {
        title: 'Notes',
        icon: FilesIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/apps/notes',
        external: true
    },
    {
        title: 'Calendar',
        icon: CalendarIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/apps/calendar',
        external: true
    },
    {
        title: 'Email',
        icon: MailIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/apps/email',
        external: true
    },
    {
        title: 'Tickets',
        icon: TicketIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/apps/tickets',
        external: true
    },
    {
        title: 'Kanban',
        icon: LayoutKanbanIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/apps/kanban',
        external: true
    },

    { header: 'Pages' },
    {
        title: 'Pages',
        icon: ChartDonut3Icon,
        chip: 'Pro',
        to: '/',
        children: [
            {
                title: 'Pricing',
                icon: CurrencyDollarIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/pages/pricing',
                external: true
            },
            {
                title: 'Account Setting',
                icon: UserCircleIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/pages/account-settings',
                external: true
            },
            {
                title: 'FAQ',
                icon: HelpIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/pages/faq',
                external: true
            },
            {
                title: 'Gallery Lightbox',
                icon: PhotoAiIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/pages/gallery-lightbox',
                external: true
            },
            {
                title: 'Search Results',
                icon: SearchIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/pages/search-results',
                external: true
            },
            {
                title: 'Social Contacts',
                icon: SocialIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/pages/social-media-contacts',
                external: true
            },
            {
                title: 'Treeview',
                icon: BrandTidalIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/pages/treeview',
                external: true
            }
        ]
    },
    { header: 'Forms' },
    {
        title: 'Form Elements',
        icon: AppsIcon,
        chip: 'Pro',
        to: '/components/',
        children: [
            {
                title: 'Autocomplete',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/autocomplete',
                external: true
            },
            {
                title: 'Combobox',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/combobox',
                external: true
            },
            {
                title: 'Button',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/button',
                external: true
            },
            {
                title: 'Checkbox',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/checkbox',
                external: true
            },
            {
                title: 'Custom Inputs',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/custominputs',
                external: true
            },
            {
                title: 'File Inputs',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/fileinputs',
                external: true
            },
            {
                title: 'Radio',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/radio',
                external: true
            },
            {
                title: 'Date Time',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/date-time',
                external: true
            },
            {
                title: 'Select',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/select',
                external: true
            },
            {
                title: 'Slider',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/slider',
                external: true
            },
            {
                title: 'Switch',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/switch',
                external: true
            },
            {
                title: 'Time Picker',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/time-picker',
                external: true
            },
            {
                title: 'Stepper',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/stepper',
                external: true
            }
        ]
    },
    {
        title: 'Form Layout',
        icon: FileTextIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-layouts',
        external: true
    },
    {
        title: 'Form Horizontal',
        icon: BoxAlignBottomIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-horizontal',
        external: true
    },
    {
        title: 'Form Vertical',
        icon: BoxAlignLeftIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-vertical',
        external: true
    },
    {
        title: 'Form Custom',
        icon: FileDotsIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-custom',
        external: true
    },
    {
        title: 'Form Validation',
        icon: FilesIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-validation',
        external: true
    },
    {
        title: 'Editor',
        icon: EditIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/forms/editor',
        external: true
    },

    { header: 'Tables' },
    {
        title: 'Basic Table',
        icon: BorderAllIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/tables/basic',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Dark Table',
        icon: BorderHorizontalIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/tables/dark',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Density Table',
        icon: BorderInnerIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/tables/density',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Fixed Header Table',
        icon: BorderTopIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/tables/fixed-header',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Height Table',
        icon: BorderVerticalIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/tables/height',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Editable Table',
        icon: BorderStyle2Icon,
        to: 'https://flexy-vue3-main-admin.vercel.app/tables/editable',
        chip: 'Pro',
        external: true
    },
    { header: 'Data Tables' },
    {
        title: 'Data Tables',
        icon: AppsIcon,
        chip: 'Pro',
        to: '/components/',
        children: [
            {
                title: 'Basic Table',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/datatables/basic',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Header Table',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/datatables/header',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Selection Table',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/datatables/selection',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Sorting Table',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/datatables/sorting',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Pagination Table',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/datatables/pagination',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Filtering Table',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/datatables/filtering',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Grouping Table',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/datatables/grouping',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Table Slots',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/datatables/slots',
                chip: 'Pro',
                external: true
            },
            {
                title: 'CRUD Table',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/tables/datatables/crudtable',
                chip: 'Pro',
                external: true
            }
        ]
    },

    { header: 'UI' },
    {
        title: 'UI Components',
        icon: BoxIcon,
        chip: 'Pro',
        to: '#',
        children: [
            {
                title: 'Alert',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/ui-components/alert'
            },
            {
                title: 'Accordion',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/ui-components/accordion'
            },
            {
                title: 'Avatar',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/ui-components/avatar'
            },
            {
                title: 'Chip',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/ui-components/chip'
            },
            {
                title: 'Dialog',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/ui-components/dialogs'
            },
            {
                title: 'List',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/ui-components/list'
            },
            {
                title: 'Menus',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/ui-components/menus'
            },
            {
                title: 'Rating',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/ui-components/rating'
            },
            {
                title: 'Tabs',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/ui-components/tabs'
            },
            {
                title: 'Tooltip',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/ui-components/tooltip'
            },
            {
                title: 'Typography',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/ui-components/typography'
            }
        ]
    },

    { header: 'Charts' },
    {
        title: 'Line',
        icon: ChartLineIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/charts/line-chart',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Gredient',
        icon: ChartArcsIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/charts/gredient-chart',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Area',
        icon: ChartAreaIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/charts/area-chart',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Candlestick',
        icon: ChartCandleIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/charts/candlestick-chart',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Column',
        icon: ChartDotsIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/charts/column-chart',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Doughnut & Pie',
        icon: ChartDonut3Icon,
        to: 'https://flexy-vue3-main-admin.vercel.app/charts/doughnut-pie-chart',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Radialbar & Radar',
        icon: ChartRadarIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/charts/radialbar-chart',
        chip: 'Pro',
        external: true
    },

    { header: 'auth' },
    {
        title: 'Login',
        icon: LoginIcon,
        to: '/auth/login',
        external: false
    },
    {
        title: 'Register',
        icon: UserPlusIcon,
        to: '/auth/register',
        external: false
    },
    {
        title: 'Auth Pages',
        icon: UserShieldIcon,
        chip: 'Pro',
        to: '#',
        children: [
            {
                title: 'Side Login',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/auth/login'
            },
            {
                title: 'Boxed Login',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/auth/login2'
            },

            {
                title: 'Side Register',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/auth/register'
            },
            {
                title: 'Boxed Register',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/auth/register2'
            },

            {
                title: 'Side Forgot Password',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/auth/forgot-password'
            },
            {
                title: 'Boxed Forgot Password',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/auth/forgot-password2'
            },

            {
                title: 'Side Two Steps',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/auth/two-step'
            },
            {
                title: 'Boxed Two Steps',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/auth/two-step2'
            },

            {
                title: 'Error',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/auth/404'
            },
            {
                title: 'Maintenance',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/auth/maintenance'
            }
        ]
    },
    { header: 'Extra' },
    {
        title: 'Icons',
        icon: MoodHappyIcon,
        to: '/icons',
        external: false
    },
    {
        title: 'Sample Page',
        icon: ApertureIcon,
        to: '/sample-page',
        external: false
    }
];

export default sidebarItem;
