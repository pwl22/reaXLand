"""PettingZoo Parallel API test for ReaXLand environment.

See: https://pettingzoo.farama.org/content/environment_tests/
"""

from pettingzoo.test import parallel_api_test

from reaxland.env import ReaXLand


def test_pettingzoo_api() -> None:
    """Test ReaXLand environment with PettingZoo parallel API."""
    env = ReaXLand()
    parallel_api_test(env, num_cycles=1_000_000)
