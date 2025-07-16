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
        to: 'https://flexy-vue3-main-admin.vercel.app/dashboards/analytical?showBtn=1',
        chip: 'Pro',
        external: true
    },
    {
        title: 'eCommerce',
        icon: ShoppingCartIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/dashboards/ecommerce?showBtn=1',
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
                to: 'https://flexy-vue3-main-admin.vercel.app/front-page/homepage?showBtn=1',
                external: true
            },
            {
                title: 'About Us',
                chip: 'Pro',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/front-page/about-us?showBtn=1',
                external: true
            },
            {
                title: 'Blog',
                chip: 'Pro',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/front-page/blog/posts?showBtn=1',
                external: true
            },
            {
                title: 'Blog Details',
                chip: 'Pro',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/front-page/blog/early-black-friday-amazon-deals-cheap-tvs-headphones?showBtn=1',
                external: true
            },
            {
                title: 'Contact Us',
                chip: 'Pro',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/front-page/contact-us?showBtn=1',
                external: true
            },
            {
                title: 'Portfolio',
                chip: 'Pro',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/front-page/portfolio?showBtn=1',
                external: true
            },
            {
                title: 'Pricing',
                chip: 'Pro',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/front-page/pricing?showBtn=1',
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
        to: 'https://flexy-vue3-main-admin.vercel.app/apps/contacts?showBtn=1',
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
                to: 'https://flexy-vue3-main-admin.vercel.app/apps/blog/posts?showBtn=1',
                external: true
            },
            {
                title: 'Detail',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones?showBtn=1',
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
                to: 'https://flexy-vue3-main-admin.vercel.app/ecommerce/products?showBtn=1',
                external: true
            },
            {
                title: 'Detail',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/ecommerce/product/detail/1?showBtn=1',
                external: true
            },
            {
                title: 'List',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/ecommerce/productlist?showBtn=1',
                external: true
            },
            {
                title: 'Checkout',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/ecommerce/checkout?showBtn=1',
                external: true
            },
            {
                title: 'Add Product',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/ecommerce/add-product?showBtn=1',
                external: true
            },
            {
                title: 'Edit Product',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/ecommerce/edit-product?showBtn=1',
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
                to: 'https://flexy-vue3-main-admin.vercel.app/apps/user/profile?showBtn=1',
                external: true
            },
            {
                title: 'Followers',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/apps/user/profile/followers?showBtn=1',
                external: true
            },
            {
                title: 'Friends',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/apps/user/profile/friends?showBtn=1',
                external: true
            },
            {
                title: 'Gallery',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/apps/user/profile/gallery?showBtn=1',
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
                to: 'https://flexy-vue3-main-admin.vercel.app/apps/invoice?showBtn=1',
                external: true
            },
            {
                title: 'Details',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/apps/invoice/details/102?showBtn=1',
                external: true
            },
            {
                title: 'Create',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/apps/invoice/create?showBtn=1',
                external: true
            },
            {
                title: 'Edit',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/apps/invoice/edit/102?showBtn=1',
                external: true
            }
        ]
    },
    {
        title: 'Chats',
        icon: Message2Icon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/apps/chats?showBtn=1',
        external: true
    },

    {
        title: 'Notes',
        icon: FilesIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/apps/notes?showBtn=1',
        external: true
    },
    {
        title: 'Calendar',
        icon: CalendarIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/apps/calendar?showBtn=1',
        external: true
    },
    {
        title: 'Email',
        icon: MailIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/apps/email?showBtn=1',
        external: true
    },
    {
        title: 'Tickets',
        icon: TicketIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/apps/tickets?showBtn=1',
        external: true
    },
    {
        title: 'Kanban',
        icon: LayoutKanbanIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/apps/kanban?showBtn=1',
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
                to: 'https://flexy-vue3-main-admin.vercel.app/pages/pricing?showBtn=1',
                external: true
            },
            {
                title: 'Account Setting',
                icon: UserCircleIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/pages/account-settings?showBtn=1',
                external: true
            },
            {
                title: 'FAQ',
                icon: HelpIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/pages/faq?showBtn=1',
                external: true
            },
            {
                title: 'Gallery Lightbox',
                icon: PhotoAiIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/pages/gallery-lightbox?showBtn=1',
                external: true
            },
            {
                title: 'Search Results',
                icon: SearchIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/pages/search-results?showBtn=1',
                external: true
            },
            {
                title: 'Social Contacts',
                icon: SocialIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/pages/social-media-contacts?showBtn=1',
                external: true
            },
            {
                title: 'Treeview',
                icon: BrandTidalIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/pages/treeview?showBtn=1',
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
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/autocomplete?showBtn=1',
                external: true
            },
            {
                title: 'Combobox',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/combobox?showBtn=1',
                external: true
            },
            {
                title: 'Button',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/button?showBtn=1',
                external: true
            },
            {
                title: 'Checkbox',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/checkbox?showBtn=1',
                external: true
            },
            {
                title: 'Custom Inputs',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/custominputs?showBtn=1',
                external: true
            },
            {
                title: 'File Inputs',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/fileinputs?showBtn=1',
                external: true
            },
            {
                title: 'Radio',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/radio?showBtn=1',
                external: true
            },
            {
                title: 'Date Time',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/date-time?showBtn=1',
                external: true
            },
            {
                title: 'Select',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/select?showBtn=1',
                external: true
            },
            {
                title: 'Slider',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/slider?showBtn=1',
                external: true
            },
            {
                title: 'Switch',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/switch?showBtn=1',
                external: true
            },
            {
                title: 'Time Picker',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/time-picker?showBtn=1',
                external: true
            },
            {
                title: 'Stepper',
                icon: PointIcon,
                chip: 'Pro',
                to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-elements/stepper?showBtn=1',
                external: true
            }
        ]
    },
    {
        title: 'Form Layout',
        icon: FileTextIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-layouts?showBtn=1',
        external: true
    },
    {
        title: 'Form Horizontal',
        icon: BoxAlignBottomIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-horizontal?showBtn=1',
        external: true
    },
    {
        title: 'Form Vertical',
        icon: BoxAlignLeftIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-vertical?showBtn=1',
        external: true
    },
    {
        title: 'Form Custom',
        icon: FileDotsIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-custom?showBtn=1',
        external: true
    },
    {
        title: 'Form Validation',
        icon: FilesIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/forms/form-validation?showBtn=1',
        external: true
    },
    {
        title: 'Editor',
        icon: EditIcon,
        chip: 'Pro',
        to: 'https://flexy-vue3-main-admin.vercel.app/forms/editor?showBtn=1',
        external: true
    },

    { header: 'Tables' },
    {
        title: 'Basic Table',
        icon: BorderAllIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/tables/basic?showBtn=1',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Dark Table',
        icon: BorderHorizontalIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/tables/dark?showBtn=1',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Density Table',
        icon: BorderInnerIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/tables/density?showBtn=1',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Fixed Header Table',
        icon: BorderTopIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/tables/fixed-header?showBtn=1',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Height Table',
        icon: BorderVerticalIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/tables/height?showBtn=1',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Editable Table',
        icon: BorderStyle2Icon,
        to: 'https://flexy-vue3-main-admin.vercel.app/tables/editable?showBtn=1',
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
                to: 'https://flexy-vue3-main-admin.vercel.app/datatables/basic?showBtn=1',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Header Table',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/datatables/header?showBtn=1',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Selection Table',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/datatables/selection?showBtn=1',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Sorting Table',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/datatables/sorting?showBtn=1',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Pagination Table',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/datatables/pagination?showBtn=1',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Filtering Table',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/datatables/filtering?showBtn=1',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Grouping Table',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/datatables/grouping?showBtn=1',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Table Slots',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/datatables/slots?showBtn=1',
                chip: 'Pro',
                external: true
            },
            {
                title: 'CRUD Table',
                icon: PointIcon,
                to: 'https://flexy-vue3-main-admin.vercel.app/tables/datatables/crudtable?showBtn=1',
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
                to: 'https://flexy-vue3-main-admin.vercel.app/ui-components/alert?showBtn=1'
            },
            {
                title: 'Accordion',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/ui-components/accordion?showBtn=1'
            },
            {
                title: 'Avatar',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/ui-components/avatar?showBtn=1'
            },
            {
                title: 'Chip',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/ui-components/chip?showBtn=1'
            },
            {
                title: 'Dialog',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/ui-components/dialogs?showBtn=1'
            },
            {
                title: 'List',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/ui-components/list?showBtn=1'
            },
            {
                title: 'Menus',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/ui-components/menus?showBtn=1'
            },
            {
                title: 'Rating',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/ui-components/rating?showBtn=1'
            },
            {
                title: 'Tabs',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/ui-components/tabs?showBtn=1'
            },
            {
                title: 'Tooltip',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/ui-components/tooltip?showBtn=1'
            },
            {
                title: 'Typography',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/ui-components/typography?showBtn=1'
            }
        ]
    },

    { header: 'Charts' },
    {
        title: 'Line',
        icon: ChartLineIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/charts/line-chart?showBtn=1',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Gredient',
        icon: ChartArcsIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/charts/gredient-chart?showBtn=1',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Area',
        icon: ChartAreaIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/charts/area-chart?showBtn=1',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Candlestick',
        icon: ChartCandleIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/charts/candlestick-chart?showBtn=1',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Column',
        icon: ChartDotsIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/charts/column-chart?showBtn=1',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Doughnut & Pie',
        icon: ChartDonut3Icon,
        to: 'https://flexy-vue3-main-admin.vercel.app/charts/doughnut-pie-chart?showBtn=1',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Radialbar & Radar',
        icon: ChartRadarIcon,
        to: 'https://flexy-vue3-main-admin.vercel.app/charts/radialbar-chart?showBtn=1',
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
                to: 'https://flexy-vue3-main-admin.vercel.app/auth/login?showBtn=1'
            },
            {
                title: 'Boxed Login',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/auth/login2?showBtn=1'
            },

            {
                title: 'Side Register',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/auth/register?showBtn=1'
            },
            {
                title: 'Boxed Register',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/auth/register2?showBtn=1'
            },

            {
                title: 'Side Forgot Password',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/auth/forgot-password?showBtn=1'
            },
            {
                title: 'Boxed Forgot Password',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/auth/forgot-password2?showBtn=1'
            },

            {
                title: 'Side Two Steps',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/auth/two-step?showBtn=1'
            },
            {
                title: 'Boxed Two Steps',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/auth/two-step2?showBtn=1'
            },

            {
                title: 'Error',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/auth/404?showBtn=1'
            },
            {
                title: 'Maintenance',
                icon: PointIcon,
                chip: 'Pro',
                external: true,
                to: 'https://flexy-vue3-main-admin.vercel.app/auth/maintenance?showBtn=1'
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
