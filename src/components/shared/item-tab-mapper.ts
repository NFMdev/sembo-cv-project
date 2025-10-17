import { TABS } from './constants/tabs-constants';

export function mapTabItem(id: string): string | undefined {
    return TABS.find(t => t.id === id)?.name;
}